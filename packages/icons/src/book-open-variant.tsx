import { mdiBookOpenVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookOpenVariant(props: IconComponentProps) {
  return <Icon path={mdiBookOpenVariant} {...props} />;
}

export { mdiBookOpenVariant as path };
