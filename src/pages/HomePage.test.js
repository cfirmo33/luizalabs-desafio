import { launch } from 'puppeteer'

describe('Página inicial', () => {
  it('Adicionando um item nos favoritos', async () => {
    const browser = await launch({
      headless: true,
    })
    const page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 1000,
        height: 2400,
      },
      userAgent: '',
    })

    await page.goto('http://localhost:3000/')

    await page.waitForSelector('div.lista-de-personagens > div:nth-child(1) > button')
    await page.click('div.lista-de-personagens > div:nth-child(1) > button')
    const totalFavoritos = await page.$eval('nav > ul > li:nth-child(2) > a > small', e => e.innerHTML)
    expect(totalFavoritos).toBe('1')
    browser.close()
  }, 160000)

  it('Realizando uma busca', async () => {
    const browser = await launch({
      headless: true,
    })
    const page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 1000,
        height: 2000,
      },
      userAgent: '',
    })

    await page.goto('http://localhost:3000/')
    const searchInput = await page.$('.search-bar > input[type="text"]')
    await searchInput.type('captain')

    await page.waitForSelector('.title-box small')
    const title = await page.$eval('.title-box small', e => e.innerHTML)
    await page.waitForSelector('.lista-de-personagens .item')
    expect(title).toContain('captain')

    browser.close()
  }, 160000)

  it('Adcionando e removendo dos favoritos', async () => {
    const browser = await launch({
      headless: true,
    })
    const page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 1000,
        height: 400,
      },
      userAgent: '',
    })

    await page.goto('http://localhost:3000/')
    await page.waitForSelector('div.lista-de-personagens > div:nth-child(1) > button')
    await page.click('div.lista-de-personagens > div:nth-child(1) > button')
    await page.click('div.lista-de-personagens > div:nth-child(2) > button')
    await page.click('div.lista-de-personagens > div:nth-child(3) > button')
    await page.click('nav > ul > li:nth-child(2) > a')
    await page.click('div.lista-de-personagens > div:nth-child(1) > button')
    const totalFavoritos = await page.$eval('nav > ul > li:nth-child(2) > a > small', e => e.innerHTML)
    expect(totalFavoritos).toBe('2')


    browser.close()
  }, 160000)
})
