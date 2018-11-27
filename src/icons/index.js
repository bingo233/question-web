import svgIcon from '@/components/SvgIcon'
import Vue from 'vue';

Vue.component('svg-icon',svgIcon)

// const requireAll = requireContext => requireContext.keys().map(requireContext)
const requireAll = requireContext => {
  return requireContext.keys().map(requireContext)
}
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)