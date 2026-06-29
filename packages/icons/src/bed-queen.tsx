import { mdiBedQueen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedQueen(props: IconComponentProps) {
  return <Icon path={mdiBedQueen} {...props} />;
}

export { mdiBedQueen as path };
