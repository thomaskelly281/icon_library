import { mdiWebhook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Webhook(props: IconComponentProps) {
  return <Icon path={mdiWebhook} {...props} />;
}

export { mdiWebhook as path };
