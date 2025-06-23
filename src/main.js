/**
 * @copyright Copyright (c) 2018 Roeland Jago Douma <roeland@famdouma.nl>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @license AGPL-3.0-or-later
 *
 * SPDX-FileCopyrightText: 2018 Roeland Jago Douma <roeland@famdouma.nl>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Vue from 'vue'
import App from './App.vue'

Vue.prototype.t = t
Vue.prototype.OC = OC

const app = new Vue({
	render: (h) => h(App),
}).$mount('#bruteforcesettings')

export { app }
