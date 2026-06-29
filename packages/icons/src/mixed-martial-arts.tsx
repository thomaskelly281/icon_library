import { mdiMixedMartialArts } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MixedMartialArts(props: IconComponentProps) {
  return <Icon path={mdiMixedMartialArts} {...props} />;
}

export { mdiMixedMartialArts as path };
