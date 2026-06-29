import { mdiEmoticonSickOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonSickOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonSickOutline} {...props} />;
}

export { mdiEmoticonSickOutline as path };
