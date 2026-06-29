import { mdiBicycleCargo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BicycleCargo(props: IconComponentProps) {
  return <Icon path={mdiBicycleCargo} {...props} />;
}

export { mdiBicycleCargo as path };
