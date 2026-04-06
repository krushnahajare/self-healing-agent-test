function processItems(items) {
    // BUG: no null check, items might be undefined
    const mapped = items.map(item => item.id);
    return mapped;
}

module.exports = { processItems };