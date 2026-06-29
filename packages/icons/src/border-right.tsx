import { mdiBorderRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderRight(props: IconComponentProps) {
  return <Icon path={mdiBorderRight} {...props} />;
}

export { mdiBorderRight as path };
