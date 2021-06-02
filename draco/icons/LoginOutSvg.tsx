import React from 'react'

import { SvgClass } from './type'

const LoginOutSvg: React.FC<SvgClass> = ({
  classname = '',
  width,
  height
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      className={`icon ${classname}`}
      viewBox="0 0 1024 1024"
    >
      <defs>
        <style></style>
      </defs>
      <path d="M512.099 127.99H128.165l-.141 768.151 384.075-.502V831.72l-320.062.242V191.784h320.062V127.99zm-25.168 0"></path>
      <path d="M865.27 543.979l30.904-32.164-30.904-31.848-545.899-.056v64.013z"></path>
      <path d="M896.174 511.98L686.301 301.704l-45.138 45.189 209.873 210.276z"></path>
      <path d="M851.036 466.913L641.245 677.107l45.138 45.189 209.791-210.193zM512.099 127.99h64.012v192.233h-64.012zm-.766 576.233h64.779v191.416h-64.779z"></path>
    </svg>
  )
}

export default LoginOutSvg
