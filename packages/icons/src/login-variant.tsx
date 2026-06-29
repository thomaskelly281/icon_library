import { mdiLoginVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LoginVariant(props: IconComponentProps) {
  return <Icon path={mdiLoginVariant} {...props} />;
}

export { mdiLoginVariant as path };
