import React from 'react'

import App from './src/app/components'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>
}

export const onClientEntry = () => {
  if (process.env.NODE_ENV !== `production`) {
    require(`preact/debug`)
  }
}
