import { mdiBedDouble } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedDouble(props: IconComponentProps) {
  return <Icon path={mdiBedDouble} {...props} />;
}

export { mdiBedDouble as path };
