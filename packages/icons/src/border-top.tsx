import { mdiBorderTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderTop(props: IconComponentProps) {
  return <Icon path={mdiBorderTop} {...props} />;
}

export { mdiBorderTop as path };
