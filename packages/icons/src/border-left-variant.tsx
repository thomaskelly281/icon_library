import { mdiBorderLeftVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderLeftVariant(props: IconComponentProps) {
  return <Icon path={mdiBorderLeftVariant} {...props} />;
}

export { mdiBorderLeftVariant as path };
