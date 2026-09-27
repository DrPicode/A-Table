const CATEGORIES = [
  { id: 'salades', label: 'Salades', icon: '🥗' },
  { id: 'legumes', label: 'Légumes', icon: '🥕' },
  { id: 'feculents', label: 'Féculents', icon: '🍝' },
];

const DEPARTMENTS = [
  { id: 'fruits', label: 'Fruits & légumes', icon: '🥬' },
  { id: 'epicerie', label: 'Épicerie', icon: '🛒' },
  { id: 'frais', label: 'Frais & crèmerie', icon: '🥛' },
  { id: 'viande', label: 'Viande', icon: '🥩' },
  { id: 'poisson', label: 'Poisson', icon: '🐟' },
  { id: 'surgeles', label: 'Surgelés', icon: '❄️' },
];

const DEFAULT_RECIPES = [
  {
    id: 'taboule', name: 'Taboulé', category: 'salades', description: 'Frais, coloré et prêt à partager',
    ingredients: [
      ['semoule', 'Semoule', '500 g', 'epicerie'], ['gaspacho', 'Gaspacho', '1 L', 'frais'],
      ['tomates-cerises', 'Tomates cerises', '1 barquette', 'fruits'], ['poivrons-oignons', 'Mélange poivrons & oignons', '1 sachet', 'fruits'],
      ['emmental', 'Emmental', '1', 'frais'], ['oignons-frits', 'Oignons frits', '', 'epicerie'],
    ],
  },
  {
    id: 'salade-carottes', name: 'Salade de carottes râpées', category: 'salades', description: 'La petite salade complète',
    ingredients: [
      ['carottes-rapees', 'Carottes râpées', '1 barquette', 'fruits'], ['mozzarella', 'Mozzarella', 'billes', 'frais'],
      ['thon', 'Thon', '', 'epicerie'], ['oignons-frits', 'Oignons frits', 'ou biscottes en morceaux', 'epicerie'],
      ['vinaigre-balsamique', 'Vinaigre balsamique', '', 'epicerie'],
    ],
  },
  {
    id: 'salade-tomates', name: 'Salade de tomates', category: 'salades', description: 'Tomates, maïs et mozzarella',
    ingredients: [
      ['tomates-cerises', 'Tomates cerises', '', 'fruits'], ['mais', 'Maïs', '', 'epicerie'],
      ['mozzarella', 'Mozzarella', '1 boule', 'frais'], ['oignons-frits', 'Oignons frits', '', 'epicerie'],
      ['vinaigre-balsamique', 'Vinaigre balsamique', '', 'epicerie'],
    ],
  },
  {
    id: 'epinards-poisson', name: 'Épinards & poisson pané', category: 'legumes', description: 'Un plat simple et réconfortant',
    ingredients: [
      ['epinards', 'Épinards surgelés', '', 'surgeles'], ['poisson-pane', 'Poisson pané', '', 'poisson'],
      ['fromage-rape', 'Fromage râpé', '', 'frais'],
    ],
  },
  {
    id: 'riz-ratatouille', name: 'Riz & ratatouille', category: 'legumes', description: 'Avec une touche de fromage frais',
    ingredients: [
      ['riz', 'Riz', '', 'epicerie'], ['ratatouille', 'Ratatouille surgelée / pisto de verduras', '', 'surgeles'],
      ['sauce-tomate', 'Sauce tomate', 'facultatif', 'epicerie'], ['fromage-frais', 'Fromage frais (type Philadelphia)', '', 'frais'],
    ],
  },
  {
    id: 'riz-champignons-poulet', name: 'Riz aux champignons & poulet', category: 'feculents', description: 'Le riz et le poulet cuisent séparément', note: 'Faire cuire le riz et le poulet séparément — ne pas mélanger.',
    ingredients: [
      ['riz', 'Riz', '', 'epicerie'], ['champignons', 'Champignons', '2 boîtes', 'epicerie'],
      ['poulet-des', 'Poulet en dés', '', 'viande'], ['creme-fraiche', 'Crème fraîche', '1 pot de 500 g', 'frais'],
      ['fromage-rape', 'Fromage râpé', '', 'frais'],
    ],
  },
  {
    id: 'coquillettes-jambon', name: 'Coquillettes au jambon', category: 'feculents', description: 'Classique et rapide à préparer',
    ingredients: [
      ['coquillettes', 'Coquillettes', '', 'epicerie'], ['jambon', 'Jambon', '', 'frais'],
      ['creme-fraiche', 'Crème fraîche', '', 'frais'], ['fromage-rape', 'Fromage râpé', 'ou cheddar en tranches', 'frais'],
    ],
  },
  {
    id: 'tagliatelles-carbonara', name: 'Tagliatelles carbonara', category: 'feculents', description: 'À la crème et aux lardons',
    ingredients: [
      ['tagliatelles', 'Tagliatelles fraîches', '', 'frais'], ['lardons', 'Lardons', '', 'frais'],
      ['creme-fraiche', 'Crème fraîche', '', 'frais'], ['fromage-rape', 'Fromage râpé', '', 'frais'],
    ],
  },
  {
    id: 'spaghetti-burrata', name: 'Spaghetti burrata & pesto rosso', category: 'feculents', description: 'Une assiette ensoleillée',
    ingredients: [
      ['spaghetti', 'Spaghetti', '', 'epicerie'], ['burrata', 'Burrata', '', 'frais'],
      ['pesto-rosso', 'Pesto rosso', '', 'epicerie'], ['sauce-tomate', 'Sauce tomate', '1 brique', 'epicerie'],
    ],
  },
  {
    id: 'spaghetti-bolognaise', name: 'Spaghetti bolognaise', category: 'feculents', description: 'La sauce maison de la semaine',
    ingredients: [
      ['spaghetti', 'Spaghetti', '', 'epicerie'], ['viande-hachee', 'Viande hachée', '', 'viande'],
      ['poivrons-oignons', 'Mélange poivrons & oignons', '', 'fruits'], ['sauce-tomate', 'Sauce tomate', '', 'epicerie'],
      ['fromage-rape', 'Fromage râpé', '', 'frais'],
    ],
  },
  {
    id: 'crousty', name: 'Crousty', category: 'feculents', description: 'Riz croustillant, poulet et sauce yaourt',
    ingredients: [
      ['riz', 'Riz', '', 'epicerie'], ['poulet-pane', 'Poulet pané', '', 'viande'],
      ['sauce-yaourt', 'Sauce yaourt', '', 'frais'], ['oignons-frits', 'Oignons frits', '', 'epicerie'],
    ],
  },
  {
    id: 'yakisoba-boeuf', name: 'Yakisoba au bœuf', category: 'feculents', description: 'Nouilles sautées, sauce soja et huître',
    ingredients: [
      ['nouilles', 'Nouilles', '', 'epicerie'], ['boeuf', 'Bœuf (fricandó)', '', 'viande'],
      ['poivrons-oignons', 'Mélange poivrons & oignons', '', 'fruits'], ['sauce-soja', 'Sauce soja', '', 'epicerie'],
      ['sauce-huitre', 'Sauce huître', '', 'epicerie'],
    ],
  },
];

const STORAGE_KEY = 'a-table-cette-semaine-v1';
const state = loadState();
let activeCategory = 'tout';
let searchTerm = '';
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      selected: new Set(Array.isArray(saved.selected) ? saved.selected : []),
      checked: new Set(Array.isArray(saved.checked) ? saved.checked : []),
      custom: Array.isArray(saved.custom) ? saved.custom : [],
      customRecipes: Array.isArray(saved.customRecipes) ? saved.customRecipes : [],
      recipeOverrides: saved.recipeOverrides && typeof saved.recipeOverrides === 'object' && !Array.isArray(saved.recipeOverrides) ? saved.recipeOverrides : {},
      deletedRecipes: Array.isArray(saved.deletedRecipes) ? saved.deletedRecipes : [],
      activeView: saved.activeView === 'courses' ? 'courses' : 'plats',
    };
  } catch {
    return { selected: new Set(), checked: new Set(), custom: [], customRecipes: [], recipeOverrides: {}, deletedRecipes: [], activeView: 'plats' };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    selected: [...state.selected], checked: [...state.checked], custom: state.custom,
    customRecipes: state.customRecipes, recipeOverrides: state.recipeOverrides, deletedRecipes: state.deletedRecipes, activeView: state.activeView,
  }));
}

function getRecipes() {
  const builtIn = DEFAULT_RECIPES
    .filter(({ id }) => !state.deletedRecipes.includes(id))
    .map((recipe) => state.recipeOverrides[recipe.id] || recipe);
  return [...builtIn, ...state.customRecipes];
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderFilters() {
  const choices = [{ id: 'tout', label: 'Tout voir' }, ...CATEGORIES.map(({ id, label }) => ({ id, label }))];
  document.querySelector('#category-filters').innerHTML = choices.map(({ id, label }) => `
    <button class="filter-chip ${activeCategory === id ? 'active' : ''}" data-category="${id}" aria-pressed="${activeCategory === id}">${label}</button>
  `).join('');
}

function ingredientNames(recipe) {
  return recipe.ingredients.map(([, name]) => name).join(' ').toLocaleLowerCase('fr');
}

function renderMeals() {
  const visibleRecipes = getRecipes().filter((recipe) => {
    const categoryMatches = activeCategory === 'tout' || recipe.category === activeCategory;
    const queryMatches = !searchTerm || `${recipe.name} ${recipe.description} ${ingredientNames(recipe)}`.toLocaleLowerCase('fr').includes(searchTerm);
    return categoryMatches && queryMatches;
  });
  const groups = CATEGORIES.map((category) => ({
    ...category,
    recipes: visibleRecipes.filter((recipe) => recipe.category === category.id),
  })).filter((group) => group.recipes.length);

  document.querySelector('#meal-groups').innerHTML = groups.map((group) => `
    <section class="meal-group" aria-label="${escapeHTML(group.label)}">
      <h3 class="meal-group-heading"><span class="group-icon">${group.icon}</span>${escapeHTML(group.label)}<span class="group-line"></span><span class="group-count">${group.recipes.length} ${group.recipes.length > 1 ? 'plats' : 'plat'}</span></h3>
      <div class="meal-grid">${group.recipes.map(renderMealCard).join('')}</div>
    </section>
  `).join('');
  document.querySelector('#no-results').classList.toggle('hidden', visibleRecipes.length > 0);
}

function renderMealCard(recipe) {
  const selected = state.selected.has(recipe.id);
  const ingredientPreview = recipe.ingredients.slice(0, 4).map(([, name]) => `<span class="ingredient-tag">${escapeHTML(name)}</span>`).join('');
  const more = recipe.ingredients.length > 4 ? `<span class="ingredient-tag more">+${recipe.ingredients.length - 4}</span>` : '';
  const note = recipe.note ? `<p class="meal-note"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.5"/><path d="M8 7v4m0-6h.01"/></svg>${escapeHTML(recipe.note)}</p>` : '';
  return `
    <article class="meal-card ${selected ? 'selected' : ''}">
      <div class="meal-card-top"><h3 class="meal-name">${escapeHTML(recipe.name)}</h3>
        <button class="meal-select" data-toggle-meal="${recipe.id}" aria-label="${selected ? 'Retirer' : 'Ajouter'} ${escapeHTML(recipe.name)} ${selected ? 'du menu' : 'au menu'}" aria-pressed="${selected}">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8 3.2 3.2L13 4.8"/></svg>
        </button>
      </div>
      <p class="meal-description">${escapeHTML(recipe.description)}</p>
      <div class="ingredient-preview">${ingredientPreview}${more}</div>${note}
      <div class="meal-card-actions">
        <button type="button" data-edit-meal="${escapeHTML(recipe.id)}" aria-label="Modifier ${escapeHTML(recipe.name)}">Modifier</button>
        <button type="button" data-delete-meal="${escapeHTML(recipe.id)}" aria-label="Supprimer ${escapeHTML(recipe.name)}">Supprimer</button>
      </div>
    </article>`;
}

function buildShoppingItems() {
  const items = new Map();
  for (const recipe of getRecipes().filter(({ id }) => state.selected.has(id))) {
    for (const [id, name, quantity, department] of recipe.ingredients) {
      if (!items.has(id)) items.set(id, { id, name, department, sources: [], quantities: [] });
      const item = items.get(id);
      if (!item.sources.includes(recipe.name)) item.sources.push(recipe.name);
      if (quantity && !item.quantities.includes(quantity)) item.quantities.push(quantity);
    }
  }
  for (const item of state.custom) {
    const id = `custom-${item.id}`;
    const department = DEPARTMENTS.some(({ id: departmentId }) => departmentId === item.department) ? item.department : 'epicerie';
    items.set(id, { id, customId: item.id, name: item.name, department, sources: ['Ajouté à la main'], quantities: [], custom: true });
  }
  return [...items.values()];
}

function renderSelectedMeals() {
  const selected = getRecipes().filter(({ id }) => state.selected.has(id));
  const container = document.querySelector('#selected-meals');
  if (selected.length === 0) {
    container.innerHTML = '';
    return;
  }
  container.innerHTML = `<span class="selected-label">Au menu</span>${selected.map((recipe) => `
    <span class="meal-pill">${escapeHTML(recipe.name)}<button data-remove-meal="${recipe.id}" aria-label="Retirer ${escapeHTML(recipe.name)}" title="Retirer">×</button></span>
  `).join('')}`;
}

function renderShoppingList() {
  const items = buildShoppingItems();
  const selectedCount = state.selected.size;
  const checkedCount = items.filter(({ id }) => state.checked.has(id)).length;
  const openCount = Math.max(items.length - checkedCount, 0);
  document.querySelector('#ingredient-count').textContent = items.length;
  document.querySelector('#progress-count').textContent = `${checkedCount} / ${items.length}`;
  document.querySelector('#progress-bar').style.width = items.length ? `${(checkedCount / items.length) * 100}%` : '0%';
  document.querySelector('#shopping-summary').textContent = selectedCount
    ? `${selectedCount} ${selectedCount > 1 ? 'plats sélectionnés' : 'plat sélectionné'} · ${items.length} ${items.length > 1 ? 'articles' : 'article'} à prendre`
    : 'Sélectionne quelques plats pour commencer.';
  document.querySelector('#shopping-empty').classList.toggle('hidden', items.length > 0);
  document.querySelector('#shopping-groups').classList.toggle('hidden', items.length === 0);
  document.querySelector('.add-item-wrap').classList.toggle('hidden', items.length === 0 && selectedCount === 0);
  document.querySelector('.quantity-note').classList.toggle('hidden', items.length === 0);
  renderSelectedMeals();

  document.querySelector('#shopping-groups').innerHTML = DEPARTMENTS.map((department) => {
    const departmentItems = items.filter((item) => item.department === department.id);
    if (!departmentItems.length) return '';
    return `
      <section class="shopping-group">
        <h3 class="shopping-group-heading"><span class="group-icon">${department.icon}</span>${escapeHTML(department.label)}<span class="group-count">${departmentItems.length}</span></h3>
        ${departmentItems.map(renderShoppingItem).join('')}
      </section>`;
  }).join('');
  document.querySelector('#meal-count').textContent = selectedCount;
  document.querySelector('#selection-action-row').classList.toggle('hidden', selectedCount === 0);
  document.querySelector('#selection-summary').textContent = `${selectedCount} ${selectedCount > 1 ? 'plats sélectionnés' : 'plat sélectionné'}`;
  document.querySelector('.view-tab[data-view="courses"]').setAttribute('aria-label', `Ma liste de courses, ${items.length} articles`);
  if (openCount === 0 && items.length > 0) {
    document.querySelector('#shopping-summary').textContent = 'Tout est dans le panier, bonne semaine !';
  }
}

function renderShoppingItem(item) {
  const checked = state.checked.has(item.id);
  const details = [];
  if (item.quantities.length) details.push(item.quantities.join(' + '));
  else if (!item.custom) details.push('Quantité à prévoir');
  if (item.sources.length) details.push(item.sources.join(' · '));
  return `
    <div class="shopping-item ${checked ? 'checked' : ''}" data-shopping-item="${escapeHTML(item.id)}" role="checkbox" aria-checked="${checked}" tabindex="0">
      <span class="item-check" aria-hidden="true"><svg viewBox="0 0 14 14"><path d="m2 7.2 3.1 3L12 3.5"/></svg></span>
      <span class="item-copy"><span class="item-name">${escapeHTML(item.name)}</span><span class="item-detail">${escapeHTML(details.join(' · '))}</span></span>
      ${item.custom ? `<button class="remove-shopping-item" type="button" data-remove-custom="${escapeHTML(item.customId)}" aria-label="Supprimer ${escapeHTML(item.name)}" title="Supprimer">×</button>` : ''}
    </div>`;
}

function setView(view) {
  state.activeView = view;
  document.querySelectorAll('.view-tab').forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  document.querySelector('#view-plats').classList.toggle('hidden', view !== 'plats');
  document.querySelector('#view-courses').classList.toggle('hidden', view !== 'courses');
  saveState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2100);
}

function toggleRecipe(id) {
  const recipe = getRecipes().find((item) => item.id === id);
  if (!recipe) return;
  if (state.selected.has(id)) state.selected.delete(id);
  else state.selected.add(id);
  const activeItemIds = new Set(buildShoppingItems().map((item) => item.id));
  state.checked = new Set([...state.checked].filter((itemId) => activeItemIds.has(itemId)));
  renderMeals();
  renderShoppingList();
  saveState();
}

function toggleShoppingItem(id) {
  if (state.checked.has(id)) state.checked.delete(id);
  else state.checked.add(id);
  renderShoppingList();
  saveState();
}

function removeCustomItem(customId) {
  state.custom = state.custom.filter((item) => item.id !== customId);
  state.checked.delete(`custom-${customId}`);
  renderShoppingList();
  saveState();
  showToast('Article retiré de la liste');
}

function slugifyIngredient(value) {
  return String(value).toLocaleLowerCase('fr').normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function findIngredientId(name) {
  const key = slugifyIngredient(name);
  for (const recipe of getRecipes()) {
    const existing = recipe.ingredients.find(([, label]) => slugifyIngredient(label) === key);
    if (existing) return existing[0];
  }
  return key || `ingredient-${Date.now()}`;
}

function addIngredientRow(ingredient = null) {
  const [id = '', name = '', quantity = '', department = 'epicerie'] = ingredient || [];
  const departmentOptions = DEPARTMENTS.map(({ id: departmentId, label }) => `
    <option value="${departmentId}" ${departmentId === department ? 'selected' : ''}>${escapeHTML(label)}</option>
  `).join('');
  document.querySelector('#ingredient-rows').insertAdjacentHTML('beforeend', `
    <div class="ingredient-row" data-ingredient-id="${escapeHTML(id)}" data-original-name="${escapeHTML(name)}">
      <input data-ingredient-name type="text" maxlength="70" required value="${escapeHTML(name)}" placeholder="Ex. Tomates" aria-label="Nom de l’ingrédient" />
      <input data-ingredient-quantity type="text" maxlength="40" value="${escapeHTML(quantity)}" placeholder="Ex. 2 pièces" aria-label="Quantité" />
      <select data-ingredient-department aria-label="Rayon">${departmentOptions}</select>
      <button class="remove-ingredient" type="button" aria-label="Supprimer cet ingrédient" title="Supprimer">×</button>
    </div>
  `);
}

function openRecipeDialog(recipeId = '') {
  const dialog = document.querySelector('#recipe-dialog');
  const form = document.querySelector('#recipe-form');
  const recipe = recipeId ? getRecipes().find(({ id }) => id === recipeId) : null;
  if (recipeId && !recipe) return;

  form.reset();
  document.querySelector('#recipe-id').value = recipe?.id || '';
  document.querySelector('#recipe-dialog-title').textContent = recipe ? 'Modifier le plat' : 'Ajouter un plat';
  document.querySelector('#recipe-form [type="submit"]').textContent = recipe ? 'Enregistrer les changements' : 'Enregistrer le plat';
  document.querySelector('#recipe-name').value = recipe?.name || '';
  document.querySelector('#recipe-category').innerHTML = CATEGORIES.map(({ id, label }) => `
    <option value="${id}" ${id === (recipe?.category || 'salades') ? 'selected' : ''}>${escapeHTML(label)}</option>
  `).join('');
  document.querySelector('#recipe-description').value = recipe?.description || '';
  document.querySelector('#recipe-note').value = recipe?.note || '';
  document.querySelector('#ingredient-rows').innerHTML = '';
  if (recipe?.ingredients.length) recipe.ingredients.forEach(addIngredientRow);
  else addIngredientRow();
  dialog.showModal();
  document.querySelector('#recipe-name').focus();
}

function reconcileShoppingChecks() {
  const activeItemIds = new Set(buildShoppingItems().map(({ id }) => id));
  state.checked = new Set([...state.checked].filter((id) => activeItemIds.has(id)));
}

function clearSelection() {
  if (!state.selected.size) return;
  state.selected.clear();
  reconcileShoppingChecks();
  renderMeals();
  renderShoppingList();
  saveState();
  showToast('Sélection vidée');
}

function saveRecipeFromDialog(event) {
  event.preventDefault();
  const ingredientRows = [...document.querySelectorAll('#ingredient-rows .ingredient-row')];
  const ingredients = ingredientRows.map((row) => {
    const name = row.querySelector('[data-ingredient-name]').value.trim();
    const quantity = row.querySelector('[data-ingredient-quantity]').value.trim();
    const department = row.querySelector('[data-ingredient-department]').value;
    const oldName = row.dataset.originalName;
    const oldId = row.dataset.ingredientId;
    const id = oldId && slugifyIngredient(oldName) === slugifyIngredient(name) ? oldId : findIngredientId(name);
    return [id, name, quantity, department];
  }).filter(([, name]) => name);

  if (!ingredients.length) {
    window.alert('Ajoute au moins un ingrédient à ce plat.');
    return;
  }

  const existingId = document.querySelector('#recipe-id').value;
  const category = document.querySelector('#recipe-category').value;
  const recipe = {
    id: existingId || `plat-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    name: document.querySelector('#recipe-name').value.trim(),
    category,
    description: document.querySelector('#recipe-description').value.trim(),
    note: document.querySelector('#recipe-note').value.trim(),
    ingredients,
  };

  if (!existingId) {
    state.customRecipes.push(recipe);
    activeCategory = 'tout';
    searchTerm = '';
    document.querySelector('#search').value = '';
  } else if (DEFAULT_RECIPES.some(({ id }) => id === existingId)) {
    state.recipeOverrides[existingId] = recipe;
  } else {
    state.customRecipes = state.customRecipes.map((savedRecipe) => savedRecipe.id === existingId ? recipe : savedRecipe);
  }

  reconcileShoppingChecks();
  document.querySelector('#recipe-dialog').close();
  renderFilters();
  renderMeals();
  renderShoppingList();
  saveState();
  showToast(existingId ? 'Plat modifié' : 'Nouveau plat ajouté');
}

function deleteRecipe(recipeId) {
  const recipe = getRecipes().find(({ id }) => id === recipeId);
  if (!recipe || !window.confirm(`Supprimer « ${recipe.name} » de tes plats ?`)) return;
  if (DEFAULT_RECIPES.some(({ id }) => id === recipeId)) {
    state.deletedRecipes.push(recipeId);
    delete state.recipeOverrides[recipeId];
  } else {
    state.customRecipes = state.customRecipes.filter(({ id }) => id !== recipeId);
  }
  state.selected.delete(recipeId);
  reconcileShoppingChecks();
  renderMeals();
  renderShoppingList();
  saveState();
  showToast('Plat supprimé');
}

document.querySelector('#category-filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderMeals();
});

document.querySelector('#meal-groups').addEventListener('click', (event) => {
  const selectButton = event.target.closest('[data-toggle-meal]');
  if (selectButton) return toggleRecipe(selectButton.dataset.toggleMeal);
  const editButton = event.target.closest('[data-edit-meal]');
  if (editButton) return openRecipeDialog(editButton.dataset.editMeal);
  const deleteButton = event.target.closest('[data-delete-meal]');
  if (deleteButton) deleteRecipe(deleteButton.dataset.deleteMeal);
});

document.querySelector('#add-recipe').addEventListener('click', () => openRecipeDialog());
document.querySelector('#clear-selection').addEventListener('click', clearSelection);
document.querySelector('#recipe-form').addEventListener('submit', saveRecipeFromDialog);
document.querySelector('#close-recipe-dialog').addEventListener('click', () => document.querySelector('#recipe-dialog').close());
document.querySelector('#cancel-recipe').addEventListener('click', () => document.querySelector('#recipe-dialog').close());
document.querySelector('#add-ingredient').addEventListener('click', () => {
  addIngredientRow();
  document.querySelector('#ingredient-rows .ingredient-row:last-child [data-ingredient-name]').focus();
});
document.querySelector('#ingredient-rows').addEventListener('click', (event) => {
  const button = event.target.closest('.remove-ingredient');
  if (button) button.closest('.ingredient-row').remove();
});
document.querySelector('#recipe-dialog').addEventListener('click', (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

document.querySelector('#search').addEventListener('input', (event) => {
  searchTerm = event.target.value.trim().toLocaleLowerCase('fr');
  renderMeals();
});

document.querySelector('.view-switch').addEventListener('click', (event) => {
  const button = event.target.closest('[data-view]');
  if (button) setView(button.dataset.view);
});

document.querySelector('#selected-meals').addEventListener('click', (event) => {
  const button = event.target.closest('[data-remove-meal]');
  if (button) toggleRecipe(button.dataset.removeMeal);
});

document.querySelector('#shopping-groups').addEventListener('click', (event) => {
  const removeButton = event.target.closest('[data-remove-custom]');
  if (removeButton) return removeCustomItem(removeButton.dataset.removeCustom);
  const row = event.target.closest('[data-shopping-item]');
  if (row) toggleShoppingItem(row.dataset.shoppingItem);
});

document.querySelector('#shopping-groups').addEventListener('keydown', (event) => {
  if ((event.key === ' ' || event.key === 'Enter') && event.target.matches('[data-shopping-item]')) {
    event.preventDefault();
    toggleShoppingItem(event.target.dataset.shoppingItem);
  }
});

document.querySelectorAll('[data-go-plats]').forEach((button) => button.addEventListener('click', () => setView('plats')));

document.querySelector('#add-item-department').innerHTML = DEPARTMENTS.map(({ id, label, icon }) => `
  <option value="${id}">${icon} ${escapeHTML(label)}</option>
`).join('');

document.querySelector('#add-item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#add-item');
  const departmentSelect = document.querySelector('#add-item-department');
  const name = input.value.trim();
  if (!name) return;
  state.custom.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2, 7)}`, name, department: departmentSelect.value });
  input.value = '';
  renderShoppingList();
  saveState();
  showToast('Article ajouté à la liste');
});

document.querySelector('#reset-week').addEventListener('click', () => {
  if (!state.selected.size && !state.custom.length && !state.checked.size) {
    showToast('La semaine est déjà vide');
    return;
  }
  if (!window.confirm('Effacer les plats choisis et recommencer la semaine ?')) return;
  state.selected.clear();
  state.checked.clear();
  state.custom = [];
  renderMeals();
  renderShoppingList();
  saveState();
  setView('plats');
  showToast('Nouvelle semaine, nouvelle liste');
});

renderFilters();
renderMeals();
renderShoppingList();
setView(state.activeView);

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => { }));
}

function showAppVersion() {
  const el = document.querySelector('#app-version');
  if (!el) return;
  const fallback = () => fetch('./service-worker.js', { cache: 'no-store' })
    .then((response) => response.text())
    .then((text) => {
      const match = text.match(/a-table-(v[\w.-]+)/);
      if (match) el.textContent = match[1];
    })
    .catch(() => { });
  if (!('serviceWorker' in navigator)) return void fallback();
  navigator.serviceWorker.ready.then((registration) => {
    const worker = registration.active;
    if (!worker) return fallback();
    const channel = new MessageChannel();
    channel.port1.onmessage = (event) => {
      if (event.data) el.textContent = event.data;
    };
    worker.postMessage('version', [channel.port2]);
  }).catch(fallback);
}

showAppVersion();
