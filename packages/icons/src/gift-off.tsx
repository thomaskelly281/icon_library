import { mdiGiftOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GiftOff(props: IconComponentProps) {
  return <Icon path={mdiGiftOff} {...props} />;
}

export { mdiGiftOff as path };
