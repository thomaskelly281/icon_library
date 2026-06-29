import { mdiEmoticonSadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonSadOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonSadOutline} {...props} />;
}

export { mdiEmoticonSadOutline as path };
