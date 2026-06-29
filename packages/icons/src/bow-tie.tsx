import { mdiBowTie } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BowTie(props: IconComponentProps) {
  return <Icon path={mdiBowTie} {...props} />;
}

export { mdiBowTie as path };
