import { mdiUmbraco } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Umbraco(props: IconComponentProps) {
  return <Icon path={mdiUmbraco} {...props} />;
}

export { mdiUmbraco as path };
