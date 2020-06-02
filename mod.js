import desktop from './maps/desktop.js'
import mobile from './maps/mobile.js'
import crawler from './maps/crawler.js'

export default function rua(type) {
	type = type || 'random'

	const types = ['random', 'desktop', 'mobile', 'crawler']

	if (!types.includes(type)) throw 'unknown type, available ones are: ' + types.join(', ')

	const random = [...desktop, ...mobile, ...crawler]

	if (type === 'random')
		return random[~~(Math.random() * random.length)]
	else if (type === 'desktop')
		return desktop[~~(Math.random() * desktop.length)]
	else if (type === 'mobile')
		return mobile[~~(Math.random() * mobile.length)]
	else if (type === 'crawler')
		return crawler[~~(Math.random() * crawler.length)]
}
