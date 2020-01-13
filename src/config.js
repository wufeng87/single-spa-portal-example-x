import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('navbar', () => SystemJS.import('@portal/navbar'), isActive.navbar)
singleSpa.registerApplication('people', () => SystemJS.import('@portal/people'), isActive.people)
singleSpa.registerApplication('planets', () => SystemJS.import('@portal/planets'), isActive.planets)
singleSpa.registerApplication('app1', () => SystemJS.import('@portal/app1'), isActive.app1)

singleSpa.start()
