import { mdiEmoticonSad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonSad(props: IconComponentProps) {
  return <Icon path={mdiEmoticonSad} {...props} />;
}

export { mdiEmoticonSad as path };
