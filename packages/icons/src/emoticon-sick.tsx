import { mdiEmoticonSick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonSick(props: IconComponentProps) {
  return <Icon path={mdiEmoticonSick} {...props} />;
}

export { mdiEmoticonSick as path };
