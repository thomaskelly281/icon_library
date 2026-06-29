import { mdiSecurityNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SecurityNetwork(props: IconComponentProps) {
  return <Icon path={mdiSecurityNetwork} {...props} />;
}

export { mdiSecurityNetwork as path };
