import { mdiBedKing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedKing(props: IconComponentProps) {
  return <Icon path={mdiBedKing} {...props} />;
}

export { mdiBedKing as path };
