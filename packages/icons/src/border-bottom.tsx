import { mdiBorderBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderBottom(props: IconComponentProps) {
  return <Icon path={mdiBorderBottom} {...props} />;
}

export { mdiBorderBottom as path };
