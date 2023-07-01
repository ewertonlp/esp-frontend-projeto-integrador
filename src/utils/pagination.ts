export const getPageNumber = (url: string): number => {
    const u = new URL(url)
    return Number(u.search.split('=').slice(-1))
  }