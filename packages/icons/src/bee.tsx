import { mdiBee } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bee(props: IconComponentProps) {
  return <Icon path={mdiBee} {...props} />;
}

export { mdiBee as path };
