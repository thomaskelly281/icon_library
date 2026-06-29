import { mdiBilliards } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Billiards(props: IconComponentProps) {
  return <Icon path={mdiBilliards} {...props} />;
}

export { mdiBilliards as path };
