import { mdiBorderAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderAll(props: IconComponentProps) {
  return <Icon path={mdiBorderAll} {...props} />;
}

export { mdiBorderAll as path };
