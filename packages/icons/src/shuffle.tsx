import { mdiShuffle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shuffle(props: IconComponentProps) {
  return <Icon path={mdiShuffle} {...props} />;
}

export { mdiShuffle as path };
