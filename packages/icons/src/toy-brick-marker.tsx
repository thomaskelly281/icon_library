import { mdiToyBrickMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickMarker(props: IconComponentProps) {
  return <Icon path={mdiToyBrickMarker} {...props} />;
}

export { mdiToyBrickMarker as path };
