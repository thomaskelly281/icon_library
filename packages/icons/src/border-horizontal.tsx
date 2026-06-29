import { mdiBorderHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderHorizontal(props: IconComponentProps) {
  return <Icon path={mdiBorderHorizontal} {...props} />;
}

export { mdiBorderHorizontal as path };
