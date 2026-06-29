import { mdiXml } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Xml(props: IconComponentProps) {
  return <Icon path={mdiXml} {...props} />;
}

export { mdiXml as path };
