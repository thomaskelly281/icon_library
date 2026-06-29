import { mdiOffer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Offer(props: IconComponentProps) {
  return <Icon path={mdiOffer} {...props} />;
}

export { mdiOffer as path };
