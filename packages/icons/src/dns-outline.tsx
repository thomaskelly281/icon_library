import { mdiDnsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DnsOutline(props: IconComponentProps) {
  return <Icon path={mdiDnsOutline} {...props} />;
}

export { mdiDnsOutline as path };
