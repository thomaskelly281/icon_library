import { mdiBorderLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderLeft(props: IconComponentProps) {
  return <Icon path={mdiBorderLeft} {...props} />;
}

export { mdiBorderLeft as path };
