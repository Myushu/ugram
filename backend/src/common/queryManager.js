exports.fillAttributesFromQuery = (attributes, query) => {
  if (query.perPage)
    attributes.limit  = parseInt(query.perPage);
  if (query.page)
    attributes.offset  = parseInt(query.page);
}
