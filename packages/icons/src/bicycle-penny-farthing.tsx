import { mdiBicyclePennyFarthing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BicyclePennyFarthing(props: IconComponentProps) {
  return <Icon path={mdiBicyclePennyFarthing} {...props} />;
}

export { mdiBicyclePennyFarthing as path };
