import { mdiGift } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gift(props: IconComponentProps) {
  return <Icon path={mdiGift} {...props} />;
}

export { mdiGift as path };
