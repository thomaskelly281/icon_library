import { mdiWindowOpenVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowOpenVariant(props: IconComponentProps) {
  return <Icon path={mdiWindowOpenVariant} {...props} />;
}

export { mdiWindowOpenVariant as path };
