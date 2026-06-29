import { mdiGiftOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GiftOpen(props: IconComponentProps) {
  return <Icon path={mdiGiftOpen} {...props} />;
}

export { mdiGiftOpen as path };
