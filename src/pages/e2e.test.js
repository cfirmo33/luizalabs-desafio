import { launch } from 'puppeteer'

const URL = 'http://localhost:3000'
describe('Testes End-to-End', () => {
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

    await page.goto(URL)

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

    await page.goto(URL)
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

    await page.goto(URL)
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

  it('Acessando um personagem e suas abas', async () => {
    const browser = await launch({
      headless: false,
    })
    const page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 1000,
        height: 1000,
      },
      userAgent: '',
    })

    await page.goto(URL)
    await page.waitForSelector('div.lista-de-personagens > div:nth-child(1) > button')
    await page.click('div.lista-de-personagens > div:nth-child(1) > a')
    await page.waitForSelector('.details')

    await page.click('.menu-details li:nth-child(2) > a')
    await page.waitForSelector('.content-internal-details .result')
    const tabComics = await page.$eval('.content-internal-details .result', e => e.textContent)

    await page.click('.menu-details li:nth-child(3) > a')
    await page.waitForSelector('.content-internal-details .result')
    const tabSeries = await page.$eval('.content-internal-details .result', e => e.textContent)

    await page.click('.menu-details li:nth-child(4) > a')
    await page.waitForSelector('.content-internal-details .result')
    const tabEvents = await page.$eval('.content-internal-details .result', e => e.textContent)

    expect(tabComics.indexOf('Lista de Quadrinhos') !== -1 ||
           tabComics.indexOf('Nenhum item encontrado para este personagem.') !== -1)
      .toBe(true)

    expect(tabSeries.indexOf('Lista de Séries') !== -1 ||
           tabSeries.indexOf('Nenhum item encontrado para este personagem.') !== -1)
      .toBe(true)

    expect(tabEvents.indexOf('Lista de Eventos') !== -1 ||
           tabEvents.indexOf('Nenhum item encontrado para este personagem.') !== -1)
      .toBe(true)

    browser.close()
  }, 160000)
})
