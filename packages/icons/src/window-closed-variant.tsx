import { mdiWindowClosedVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowClosedVariant(props: IconComponentProps) {
  return <Icon path={mdiWindowClosedVariant} {...props} />;
}

export { mdiWindowClosedVariant as path };
