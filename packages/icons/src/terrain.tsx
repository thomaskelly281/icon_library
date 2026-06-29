import { mdiTerrain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Terrain(props: IconComponentProps) {
  return <Icon path={mdiTerrain} {...props} />;
}

export { mdiTerrain as path };
