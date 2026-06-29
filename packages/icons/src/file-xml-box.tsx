import { mdiFileXmlBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileXmlBox(props: IconComponentProps) {
  return <Icon path={mdiFileXmlBox} {...props} />;
}

export { mdiFileXmlBox as path };
