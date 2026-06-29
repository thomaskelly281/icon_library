import { mdiBedSingle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedSingle(props: IconComponentProps) {
  return <Icon path={mdiBedSingle} {...props} />;
}

export { mdiBedSingle as path };
