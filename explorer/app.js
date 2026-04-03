const state = {
  sites: [],
  filteredSites: [],
  previewMode: 'light',
  activeDesignMd: '',
};

const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const countLabel = document.getElementById('countLabel');
const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const siteCardTemplate = document.getElementById('siteCardTemplate');

const mdDialog = document.getElementById('mdDialog');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const dialogSiteSlug = document.getElementById('dialogSiteSlug');
const dialogTitle = document.getElementById('dialogTitle');
const openWebsiteLink = document.getElementById('openWebsiteLink');
const openPreviewLink = document.getElementById('openPreviewLink');
const openGithubLink = document.getElementById('openGithubLink');
const copyMdBtn = document.getElementById('copyMdBtn');
const mdText = document.getElementById('mdText');

function normalizeText(value) {
  return value.toLowerCase().trim();
}

function currentPreviewImage(site) {
  if (state.previewMode === 'dark') {
    return site.darkPreviewImage || site.lightPreviewImage;
  }
  return site.lightPreviewImage || site.darkPreviewImage;
}

function updateCountLabel() {
  countLabel.textContent = `${state.filteredSites.length} of ${state.sites.length} sites`;
}

function updatePreviewModeButtons() {
  lightModeBtn.classList.toggle('is-active', state.previewMode === 'light');
  darkModeBtn.classList.toggle('is-active', state.previewMode === 'dark');
  document.body.classList.toggle('theme-dark', state.previewMode === 'dark');
}

function openDialog(site) {
  dialogSiteSlug.textContent = `design-md/${site.slug}`;
  dialogTitle.textContent = site.title;
  mdText.textContent = site.designMd;

  openWebsiteLink.href = site.websiteUrl || site.githubFolderUrl;
  openPreviewLink.href =
    state.previewMode === 'dark'
      ? site.localDarkPreviewUrl || site.localPreviewUrl || site.rawPreviewUrl
      : site.localPreviewUrl || site.localDarkPreviewUrl || site.rawPreviewUrl;
  openGithubLink.href = site.githubFolderUrl;

  state.activeDesignMd = site.designMd || '';
  copyMdBtn.textContent = 'Copy DESIGN.md';

  mdDialog.showModal();
}

function renderGrid() {
  grid.innerHTML = '';

  const fragment = document.createDocumentFragment();
  state.filteredSites.forEach((site, index) => {
    const node = siteCardTemplate.content.firstElementChild.cloneNode(true);
    const button = node.querySelector('.card-btn');
    const image = node.querySelector('.preview-image');
    const siteName = node.querySelector('.site-name');
    const siteUrl = node.querySelector('.site-url');

    image.src = currentPreviewImage(site);
    image.alt = `${site.title} preview`;
    image.referrerPolicy = 'no-referrer';

    siteName.textContent = site.title;
    siteUrl.textContent = site.websiteUrl || site.slug;
    node.style.setProperty('--stagger', `${Math.min(index * 24, 520)}ms`);
    node.classList.add('animate-in');

    button.addEventListener('click', () => openDialog(site));
    fragment.appendChild(node);
  });

  grid.appendChild(fragment);
  updateCountLabel();
}

function applySearch(query) {
  if (!query) {
    state.filteredSites = state.sites;
    renderGrid();
    return;
  }

  state.filteredSites = state.sites.filter((site) => {
    const inTitle = normalizeText(site.title).includes(query);
    const inSlug = normalizeText(site.slug).includes(query);
    const inWebsite = normalizeText(site.websiteUrl || '').includes(query);
    return inTitle || inSlug || inWebsite;
  });

  renderGrid();
}

function setupEvents() {
  searchInput.addEventListener('input', (event) => {
    applySearch(normalizeText(event.target.value));
  });

  lightModeBtn.addEventListener('click', () => {
    state.previewMode = 'light';
    updatePreviewModeButtons();
    renderGrid();
  });

  darkModeBtn.addEventListener('click', () => {
    state.previewMode = 'dark';
    updatePreviewModeButtons();
    renderGrid();
  });

  closeDialogBtn.addEventListener('click', () => mdDialog.close());

  mdDialog.addEventListener('click', (event) => {
    if (event.target === mdDialog) {
      mdDialog.close();
    }
  });

  copyMdBtn.addEventListener('click', async () => {
    const content = state.activeDesignMd || '';
    if (!content) {
      copyMdBtn.textContent = 'Nothing to copy';
      setTimeout(() => {
        copyMdBtn.textContent = 'Copy DESIGN.md';
      }, 1400);
      return;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (!copied) {
          throw new Error('execCommand copy failed');
        }
      }

      copyMdBtn.textContent = 'Copied';
      setTimeout(() => {
        copyMdBtn.textContent = 'Copy DESIGN.md';
      }, 1400);
    } catch (error) {
      copyMdBtn.textContent = 'Copy failed';
    }
  });
}

async function loadSites() {
  const response = await fetch('./data/sites.json');
  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.status}`);
  }
  const payload = await response.json();
  const sites = Array.isArray(payload.sites) ? payload.sites : [];
  state.sites = sites;
  state.filteredSites = sites;
}

async function bootstrap() {
  setupEvents();
  updatePreviewModeButtons();

  try {
    await loadSites();
    renderGrid();
  } catch (error) {
    countLabel.textContent = 'Could not load data/sites.json';
    console.error(error);
  }
}

bootstrap();
