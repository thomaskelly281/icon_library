import { mdiBedEmpty } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedEmpty(props: IconComponentProps) {
  return <Icon path={mdiBedEmpty} {...props} />;
}

export { mdiBedEmpty as path };
