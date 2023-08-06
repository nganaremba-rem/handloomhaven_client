export default async function dynamicImport(path, componentName = '') {
  const module = await import(`${path}`)
  if (module?.['default']) return module
  return { default: module?.[`${componentName}`] }
}
